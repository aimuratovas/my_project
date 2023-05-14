from django.http import JsonResponse, HttpResponseBadRequest
from django.shortcuts import get_object_or_404
from beauty_store_app.models import *


def products(request):
    try:
        products = list(Product.objects.all().values())
        return JsonResponse(products, safe=False)
    except Exception as e:
        return HttpResponseBadRequest(str(e))


def product(request, product_id):
    try:
        product = list(Product.objects.all().filter(
            id=product_id).values())
        return JsonResponse(product, safe=False)
    except Exception as e:
        return HttpResponseBadRequest(str(e))


def all_brands(request):
    try:
        brands = list(Brand.objects.all().values())
        return JsonResponse(brands, safe=False)
    except Exception as e:
        return HttpResponseBadRequest(str(e))


def by_brand(request, brand_id):
    try:
        brand = Brand.objects.get(pk=brand_id)
        products = list(Product.objects.all().filter(
            brand=brand).values())
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
        products = list(Product.objects.all().filter(
            product_type=type).values())
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
        products = list(Product.objects.all().filter(
            category=category).values())
        return JsonResponse(products, safe=False)
    except Exception as e:
        return HttpResponseBadRequest(str(e))


def cart(request):
    try:
        carts = list(Shopping_cart.objects.all().values())
        return JsonResponse(carts, safe=False)
    except Exception as e:
        return HttpResponseBadRequest(str(e))


def add_cart(request, product_id):
    try:
        product = get_object_or_404(Product, id=product_id)
        cart, create = Shopping_cart.objects.get_or_create(product=product)
        cart.quantity += 1
        cart.save()
        return JsonResponse({'message': 'Product added to cart successfully.'})
    except Exception as e:
        return HttpResponseBadRequest(str(e))


def remove_cart(request, product_id):
    try:
        product = get_object_or_404(Product, id=product_id)
        cart = get_object_or_404(Shopping_cart, product=product)

        if cart.quantity > 1:
            cart.quantity -= 1
            cart.save()
        else:
            cart.delete()

        return JsonResponse({'message': 'Product removed from cart successfully.'})
    except Exception as e:
        return HttpResponseBadRequest(str(e))
