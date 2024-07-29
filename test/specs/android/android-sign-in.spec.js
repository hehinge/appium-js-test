import SignInScreen from "../../screenobjects/android/android-sign-in.screen.js";

describe('Android Sign In/Out Test', () => {
    it('should have a Phone Number option to sign in', async () => {
        // Tap on "Sign in" button
        await SignInScreen.signInBtn.click();

        // Tap on "Sign in with phone number" button
        await SignInScreen.signInWithPhoneNumBtn.click();

        // Tap on screen to dismiss a random pop up (Pixel 5 Android 13)
        await SignInScreen.randomCancelBtn.click();

        // Verify user lands on Phone Number screen
        await expect(SignInScreen.phoneNumInput).toExist();
    });

    it('should proceed with a valid sms code', async () => {
        // Enter a phone number
        await SignInScreen.phoneNumInput.addValue('5555550059');

        // Tap on the next button
        await SignInScreen.nextBtn.click();

        // Enter a valid SMS verification code
        await SignInScreen.smsCodeInput.click();
        await SignInScreen.smsCodeInput.addValue('555123');
    });

    it('should proceed with a valid email verification code', async () => {
        try {
            // Tap on "Enter email code" button (optional)
            await SignInScreen.enterEmailCodeBtn.click();

            // Enter a valid email verification code (optional)
            await SignInScreen.smsCodeInput.addValue('555123');
        } catch (error) {
            if (error.message.includes('NoSuchElement')) {
                console.error('Element not found: ', error.message);
            }
        }
    });

    it('should accept privacy terms', async () => {
        try {
            // Tap on "Agree" button on Privacy screen (optional)
            await SignInScreen.agreeBtn.click();
        } catch (error) {
            if (error.message.includes('NoSuchElement')) {
                console.error('Element not found: ', error.message);
            }
        }
    });

    it('should dismiss the Sending Likes edu popup on Discover', async () => {
        try {
            // Dismiss Sending Likes edu pop (optional)
            await SignInScreen.okGotItBtn.click();
        } catch (error) {
            if (error.message.includes('NoSuchElement')) {
                console.error('Element not found: ', error.message);
            }
        }
    });

    it('should navigate to the Profile tab', async () => {
        // Tap on the Profile tab
        await SignInScreen.profileTabBtn.click();

        // Verify Edit Profile button
        await expect(SignInScreen.editProfileBtn).toBeDisplayed();
    });

    it('should navigate to the Settings screen', async () => {
        // Tap on Settings
        await SignInScreen.settingsBtn.click();

        // Verify user lands on Settings screen
        await expect(SignInScreen.pageTitle).toHaveText('Settings');
    });

    it('should scroll to the bottom', async () => {
        // Scroll to the bottom of the screen
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)');

        // Verify Log Out button
        await expect(SignInScreen.logoutBtn).toBeDisplayed();
    });

    it('should log out from user\'s account', async () => {
        // Tap on the Log Out button
        await SignInScreen.logoutBtn.click();

        // Verify if user returns to the "Sign in" screen
        await expect(SignInScreen.signInBtn).toExist();
    });
})
