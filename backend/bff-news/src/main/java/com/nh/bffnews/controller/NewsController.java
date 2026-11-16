package com.nh.bffnews.controller;

import com.nh.bffnews.model.NewsItem;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class NewsController {

    private static final List<NewsItem> NEWS = List.of(
        new NewsItem(1, "Nueva política de trabajo remoto", "Disponible desde el 1 de septiembre.", "2026-08-18"),
        new NewsItem(2, "Mantenimiento de VPN", "Ventana de mantenimiento el sábado 23:00-01:00.", "2026-08-19"),
        new NewsItem(3, "Encuesta de clima laboral", "Responde antes del viernes; toma 5 minutos.", "2026-08-20")
    );

    @GetMapping("/api/news")
    public List<NewsItem> getNews() {
        return NEWS;
    }
}
