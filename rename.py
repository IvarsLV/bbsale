import os

# Получаем путь к папке, где находится сам скрипт
base_dir = os.path.dirname(os.path.abspath(__file__))

# Добавляем относительный путь к фото
folder_path = os.path.join(base_dir, "img/photo/testi")

# Укажите, с какого номера начинать нумерацию
start_number = 46  # Например, начать с 10

# Получаем список всех изображений в папке (учитываем все популярные форматы)
files = sorted(
    [f for f in os.listdir(folder_path) if f.lower().endswith(('.jpg', '.png', '.jpeg', '.gif', '.webp'))]
)

# Первое временное переименование (чтобы избежать перезаписи)
temp_files = []
for i, file in enumerate(files):
    old_path = os.path.join(folder_path, file)
    temp_path = os.path.join(folder_path, f"temp_{i}{os.path.splitext(file)[1]}")
    os.rename(old_path, temp_path)
    temp_files.append(temp_path)

# Окончательное переименование с выбранного номера
for i, temp_path in enumerate(sorted(temp_files), start=start_number):
    new_path = os.path.join(folder_path, f"{i}{os.path.splitext(temp_path)[1]}")
    os.rename(temp_path, new_path)

print(f"✅ Все файлы успешно переименованы, начиная с {start_number}.")