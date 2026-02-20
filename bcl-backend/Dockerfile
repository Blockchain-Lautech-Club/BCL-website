FROM python:3.11-slim

WORKDIR /app

# Install system dependencies (libpq-dev is required for psycopg2)
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy and install requirements first (to cache layers)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy all files from bcl-backend into /app
COPY . .

# Create uploads directory in the root
RUN mkdir -p uploads/avatars uploads/blogs uploads/events

# Set PYTHONPATH to the current directory so it finds the 'app' package
ENV PYTHONPATH=/app

EXPOSE 8000

# Run uvicorn pointing to the main file inside the app folder
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]