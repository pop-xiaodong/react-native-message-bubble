package com.bubblemessage;

import android.widget.TextView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class BubbleMessageManager extends SimpleViewManager<TextView> {

  @Override
  public String getName() {
    return "BubbleView";
  }

  @Override
  protected TextView createViewInstance(ThemedReactContext reactContext) {
    return new TextView(reactContext);
  }

  @ReactProp(name = "text")
  public void setText(final TextView view, String text) {
    view.setText(text);
  }

  @ReactProp(name = "type")
  public void setType(final TextView view, boolean bool) {
    if (bool) {
      view.setBackgroundResource(R.drawable.chat_mine_bg);
    } else {
      view.setBackgroundResource(R.drawable.chat_other_bg);
    }
  }
}
