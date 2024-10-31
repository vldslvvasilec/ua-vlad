from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from validate_email_address import validate_email
from config.env_loader import get_env_variable

def send_email(subject, body, to_email):
    sendgrid_api_key = get_env_variable("SENDGRID_API_KEY")

    if not validate_email(to_email, verify=True):
        return 450

    message = Mail(
        from_email=get_env_variable("SUPPORT_EMAIL"),
        to_emails=to_email,
        subject=subject,
        html_content=body
    )

    try:
        sg = SendGridAPIClient(sendgrid_api_key)
        response = sg.send(message)
        if response.status_code == 202:
            return response.status_code
        else:
            return 500
    except Exception as e:
        return 500
