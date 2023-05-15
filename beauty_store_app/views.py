from django.http import JsonResponse, HttpResponseBadRequest
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.views.decorators.csrf import csrf_exempt
from beauty_store_app.models import *
import json
from django.db import IntegrityError


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


@csrf_exempt
def signup(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)

        first_name = body_data.get('firstName')
        last_name = body_data.get('lastName')
        email = body_data.get('email')
        password = body_data.get('password')

        try:
            user = User.objects.create_user(
                username=email,
                is_active=True,
                first_name=first_name,
                last_name=last_name,
                email=email,
                password=password
            )
            return JsonResponse({'message': 'User registered successfully'})
        except IntegrityError:
            return JsonResponse({'error': 'User with the same email already exists'}, status=409)

    return JsonResponse({'error': 'Invalid request method'})


@csrf_exempt
def login(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)

        username = body_data.get('username')
        password = body_data.get('password')

        print("username: " + username)
        print("password: " + password)

        user = authenticate(request, username=username, password=password)

        print("user: ")
        print(user)

        if user is not None:
            auth_login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'error': 'Invalid username or password'}, status=401)

    return JsonResponse({'error': 'Invalid request method'})


@csrf_exempt
def logout(request):
    auth_logout(request)

    return JsonResponse({'message': 'Logout successful'})
