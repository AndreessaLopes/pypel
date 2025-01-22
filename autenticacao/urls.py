from django.urls import path, reverse_lazy
from . import views
from django.contrib.auth import views as auth_views

app_name = "autenticacao"

urlpatterns = [
    path('', views.login, name='login'),
    path('get_perfis/', views.get_perfis, name='get_perfis'),
    path('logout/', views.logout, name='logout'),
    
    path('password-reset/', views.MyPasswordReset.as_view(), name='password_reset'),
    path('password-reset/done/', views.MyPasswordResetDone.as_view(), name='password_reset_done'),
    # URL de confirmação de redefinição de senha
path(
        'reset/<uidb64>/<token>/',
        auth_views.PasswordResetConfirmView.as_view(
            template_name='password_reset_confirm.html',
            success_url=reverse_lazy('autenticacao:password_reset_complete')  # Use o namespace aqui
        ),
        name='password_reset_confirm'
    ),    # URL de conclusão da redefinição de senha
    path('reset/complete/',auth_views.PasswordResetCompleteView.as_view(template_name='password_reset_complete.html'),name='password_reset_complete'),
]
