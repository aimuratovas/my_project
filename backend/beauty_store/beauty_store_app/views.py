from django.http import JsonResponse, HttpResponseBadRequest
from beauty_store_app.models import *

# Create your views here.
def products(request):
    try:
        products = list(Product.objects.all().values())
        return JsonResponse(products, safe=False)
    except Exception as e:
        return HttpResponseBadRequest(str(e))

def all_types(request):
    try:
        types = list(Type.objects.all().values())
        return JsonResponse(types, safe=False)
    except Exception as e:
        return HttpResponseBadRequest(str(e))
    
def by_type(request, type_id):
    try:
        type = Type.objects.get(pk=type_id)
        products = list(Product.objects.all().filter(product_type=type).values())
        return JsonResponse(products, safe=False)
    except Exception as e:
        return HttpResponseBadRequest(str(e))
    
def all_categories(request):
    try:    
        categories = list(Category.objects.all().values())
        return JsonResponse(categories, safe=False)
    except Exception as e:
        return HttpResponseBadRequest(str(e))
    
def by_category(request, category_id):
    try:    
        category = Category.objects.get(pk=category_id)
        products = list(Product.objects.all().filter(category=category).values())
        return JsonResponse(products, safe=False)
    except Exception as e:
        return HttpResponseBadRequest(str(e))
