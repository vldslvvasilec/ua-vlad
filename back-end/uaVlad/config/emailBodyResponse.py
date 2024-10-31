from config.emailTexts import emailBodyResponse

def generate_response_email_content(language, name):
    if language not in emailBodyResponse:
        language = "en"
    
    texts = emailBodyResponse[language]

    email_content = f"""
    <!DOCTYPE html>
    <html lang="{language}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{texts['subject']}</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; color: #333; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333;">{texts['subject']}</h2>
            <p>{texts['greeting'].format(name=name)}</p>
            <p>{texts['thank_you']}</p>
            <p>{texts['notification']}</p>
            <p>{texts['final_note']}</p>
            <p style="font-size: 14px; color: #777;">
                {texts['signature']}
            </p>
        </div>
    </body>
    </html>
    """
    return email_content
