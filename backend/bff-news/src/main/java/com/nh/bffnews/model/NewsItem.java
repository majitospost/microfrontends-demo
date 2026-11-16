package com.nh.bffnews.model;

// Backend-for-Frontend model: shaped exactly the way the mfe-news React
// remote consumes it, not around a generic "announcement" domain model
// that might also serve other clients — that's what makes it a BFF
// rather than a shared general-purpose API.
public record NewsItem(long id, String title, String body, String date) {
}
