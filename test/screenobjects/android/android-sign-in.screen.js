class SignInScreen {
    get signInBtn() {
        return $('//android.widget.TextView[@text="Sign in"]');
    }

    get signInWithPhoneNumBtn() {
        return $('//android.widget.ScrollView/android.view.View[1]/android.widget.Button');
    }

    get randomBtn() {
        return $('//*[@resource-id="android:id/button1"]');
    }

    get randomCancelBtn() {
        return $('//*[@resource-id="com.google.android.gms:id/cancel"]');
        
    }

    get countryBtn() {
        return $('//*[@resource-id="co.hinge.app.internal:id/countryButton"]');
    }

    get usCountryCode() {
        return $('android=new UiSelector().text("United States")');
    }

    get phoneNumInput() {
        return $('//*[@resource-id="co.hinge.app.internal:id/phone_number_input"]');
    }

    get nextBtn() {
        return $('//*[@resource-id="co.hinge.app.internal:id/next_button"]');
    }

    get smsCodeInput() {
        return $('//*[@resource-id="co.hinge.app.internal:id/sms_code_input"]');
    }

    get smsCodeError() {
        return $('//*[@resource-id="co.hinge.app.internal:id/verification_code_error"]');
    }

    get phoneNumError() {
        return $('//*[@resource-id="co.hinge.app.internal:id/phone_number_error"]');
    }

    get didntGetCodeBtn() {
        return $('//*[@resource-id="co.hinge.app.internal:id/didnt_get_a_code_button"]');
    }

    get sendAgainBtn() {
        return $('//*[@resource-id="co.hinge.app.internal:id/send_again_label"]');
    }

    get optionsTitle() {
        return $('//*[@resource-id="co.hinge.app.internal:id/options_title"]');
    }

    get createAccountBtn() {
        return $('//android.widget.TextView[@text="Create account"]');
    }

    get enterEmailCodeBtn() {
        return $('//android.widget.TextView[@text="Enter email code"]');
    }

    get acceptBtn() {
        return $('//*[@resource-id="co.hinge.app.internal:id/accept_all_button"]')
    }

    get agreeBtn() {
        return $('//*[@resource-id="co.hinge.app.internal:id/agree"]')
    }

    get okGotItBtn() {
        return $('//android.widget.Button[@text="OK got it"]');
    }

    get editProfileBtn() {
        return $('android=new UiSelector().description("Edit profile")');
    }

    get pageTitle() {
        return $('//*[@resource-id="co.hinge.app.internal:id/pageTitle"]');
    }
}

export default new SignInScreen();
