from django.urls import path
from . import views

urlpatterns = [
    path('/', views.products, name='products'),
    path('products/', views.products, name='products'),
    path('products/<int:product_id>', views.product, name='product'),
    path('types/', views.all_types, name='all_types'),
    path('types/<int:type_id>', views.by_type, name='by_type'),
    path('brands/', views.all_brands, name='all_brands'),
    path('brands/<int:brand_id>', views.by_brand, name='by_brand'),
    path('categories/', views.all_categories, name='all_categories'),
    path('categories/<int:category_id>', views.by_category, name='by_category')
]
