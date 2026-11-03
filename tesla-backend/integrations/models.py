from django.db import models


class ChatMessage(models.Model):
    name = models.CharField(max_length=1000)
    message = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} - {self.created_at:%Y-%m-%d %H:%M}"