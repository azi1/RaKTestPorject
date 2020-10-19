package com.raktestproject;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import android.view.WindowManager;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;

public class ScreenShotToggleModule extends ReactContextBaseJavaModule {
  private static final String PREVENT_SCREENSHOT_ERROR_CODE = "PREVENT_SCREENSHOT_ERROR_CODE";
  private final ReactApplicationContext reactContext;

  ScreenShotToggleModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "ScreenShotToggleModule";
  }

  @ReactMethod
  public void DisableScreenShot(Promise promise) {
    runOnUiThread(new Runnable() {
      @Override
      public void run() {
        try {
          getCurrentActivity().getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
          promise.resolve("Done. Screenshot taking locked.");
        } catch(Exception e) {
          promise.reject(PREVENT_SCREENSHOT_ERROR_CODE, "Forbid screenshot taking failure.");
        }
      }
    });
  }

  @ReactMethod
  public void EnableScreenShot(Promise promise) {
    runOnUiThread(new Runnable() {
      @Override
      public void run() {
        try {
          getCurrentActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
          promise.resolve("Done. Screenshot taking unlocked.");
        } catch (Exception e) {
          promise.reject(PREVENT_SCREENSHOT_ERROR_CODE, "Allow screenshot taking failure.");
        }
      }
    });
  }
}