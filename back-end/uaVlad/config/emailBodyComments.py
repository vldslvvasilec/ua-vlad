from config.emailTexts import emailBodyComment

def generate_email_content(language, name):
    if language in emailBodyComment:
        texts = emailBodyComment[language]
    else:
        texts = emailBodyComment["en"]

    email_content = f"""
    <!DOCTYPE html>
    <html lang="{language}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{texts['subject']}</title>
        <style>
            body {{
                font-family: Arial, sans-serif; 
                background-color: #f5f5f5; 
                color: #333; 
                padding: 20px;
            }}
            .container {{
                max-width: 100%; 
                margin: auto; 
                background-color: #ffffff; 
                border-radius: 10px; 
                padding: 20px; 
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }}
            h2 {{
                color: #333; 
                text-align: center;
            }}
            .notification {{
                background-color: #e8f5e9; /* Светло-зелёный фон */
                border: 2px solid #4CAF50; /* Зелёный ободок */
                border-radius: 5px; 
                padding: 15px; 
                text-align: center; 
                margin: 20px 0; 
                font-weight: bold;
                font-size: 16px;
            }}
            .footer {{
                font-size: 14px; 
                color: #777;
                text-align: center;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <h2>{texts['subject']}</h2>
            <p>{texts['greeting'].format(name=name)}</p>
            <p>{texts['thank_you']}</p>
            <p>{texts['stay_connected']}</p>

            <div class="notification">
                {texts['notification']}
            </div>

            <p>{texts['final_note']}</p>
            <p class="footer">
                {texts['signature']}
            </p>
        </div>
    </body>
    </html>
    """
    return email_content
