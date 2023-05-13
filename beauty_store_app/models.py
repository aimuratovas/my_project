from django.db import models
# from django.contrib.auth.models import User

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=250, unique=True,
                            null=True, default="Others")

    def __str__(self):
        return f"{self.name}"


class Type(models.Model):
    name = models.CharField(max_length=250, unique=True)

    def __str__(self):
        return f"{self.name}"


class Brand(models.Model):
    name = models.CharField(max_length=250, unique=True)

    def __str__(self):
        return f"{self.name}"


class Product(models.Model):
    name = models.CharField(max_length=250, null=False)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    price = models.CharField(max_length=250)
    api_featured_image = models.ImageField(null=True, max_length=500)
    product_link = models.ImageField(null=True, max_length=700)
    description = models.TextField(max_length=1000)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    product_type = models.ForeignKey(Type, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"{self.name} {self.brand} {self.price} {self.api_featured_image} {self.product_link} {self.description} {self.category} {self.product_type}"

# class Shopping_cart(models.Model):
#      product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
#      quantity = models.IntegerField(default=1)

#      def __str__(self) -> str:
#         return f"{self.product} {self.quantity}"

# class Vendor(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     address = models.CharField(max_length=200, null=True, blank=True)
