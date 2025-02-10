import logging
import os
from datetime import datetime

# Generate log file name
LOG_FILE = f"{datetime.now().strftime('%m_%d_%Y_%H_%M_%S')}.log"

# Define logs directory (without file name)
logs_dir = os.path.join(os.getcwd(), "logs")
# Create logs directory if it does not exist
os.makedirs(logs_dir, exist_ok=True)

# Full log file path
LOG_FILE_PATH = os.path.join(logs_dir, LOG_FILE)
# ✅ This ensures we get "my_module" in logs


# logger = logging.getLogger("my_module")
# Logging setup with correct format


logging.basicConfig(
    filename=LOG_FILE_PATH,
    format="[%(asctime)s] %(filename)s - %(lineno)d %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO,
    force=True,  # Ensure it overwrites any previous logging settings
)
# logger.setLevel(logging.INFO)
