<?php
require 'phpmailer/PHPMailerAutoload.php';
function isEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}
if($_POST) {
    $email = addslashes(trim($_POST['email']));
    $text = $_POST['message'];
    $cell = $_POST['cell'];
    $name = $_POST['name'];
    $to = 'fam@mirzaminds.com';
    $subject = "New idea from Fam Speaks";
    $message = $text . "<br><br>Contact them at " . $cell . " or " . $email;
    if(!isEmail($email)) {
        $array = array();
        $array['valid'] = 0;
        $array['message'] = 'You must use a valid email address (for example, "joe@mail.com").';
        echo json_encode($array);
    }
    else {
        $array = array();
        $merge_vars = array();
        
        $mail = new PHPMailer;
        //Set who the message is to be sent from
        $mail->setFrom('hi@famspeaks.com', 'Fam Speaks');
        //Set an alternative reply-to address
        $mail->addReplyTo($email, $name);
        //Set who the message is to be sent to
        $mail->addAddress($to, 'Fam Mirza');
        //Set the subject line
        $mail->Subject = $subject;
        $mail->msgHTML($message);

        if( $mail->send() ) {
            $array['valid'] = 1;
            $array['message'] = 'Thanks! I will respond to your email shortly.';
        } else {
            $array['valid'] = 0;
            $array['message'] = 'Error: ' . $mail->ErrorInfo;
        }
        
        echo json_encode($array);
    }
}
