from django.urls import path
from . import views

urlpatterns = [
    path('/', views.products, name = 'products'),
    path('products/', views.products, name = 'products'),
    path('types/', views.all_types, name = 'all_types'),
    path('types/<int:type_id>', views.by_type, name = 'by_type'),
    path('categories/', views.all_categories, name = 'all_categories'),
    path('categories/<int:category_id>', views.by_category, name = 'by_category')
]
