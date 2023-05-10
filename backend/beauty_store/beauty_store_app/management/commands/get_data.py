from django.core.management.base import BaseCommand
import requests
from beauty_store_app.models import *

class Command(BaseCommand):
    help = 'Retrieves data from a third-party API and saves it to the database.'

    def handle(self, *args, **options):
        url = 'https://makeup-api.herokuapp.com/api/v1/products.json'
        response = requests.get(url)
        if response.status_code == 200:
            makeup_data = response.json()
            for i, item in enumerate(makeup_data):
                if i == 50:
                    break  # Exit the loop after processing the first 50 items

                category_name = item['category']
                category, created = Category.objects.get_or_create(name=category_name)

                product_type_name = item['product_type']
                type, created = Type.objects.get_or_create(name=product_type_name)
                
                product = Product.objects.create(
                    name=item['name'],
                    brand=item['brand'],
                    price=item['price'],
                    api_featured_image=item['api_featured_image'],
                    product_link=item['product_link'],
                    description=item['description'],
                    category=category,
                    product_type=type
                )
                product.save()
            self.stdout.write(self.style.SUCCESS('Data saved successfully.'))
        else:
            self.stderr.write(self.style.ERROR(f"Error: {response.status_code} - {response.reason}"))
