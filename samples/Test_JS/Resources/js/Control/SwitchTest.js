/**
 * Created by zhanglei on 16/8/3.
 */
var SwitchTest = ca.CAViewController.extend({
    ctor: function () {
        this._super();
        this.getView().setColor(ca.color._getGray());

        var customSwitch1 = ca.CASwitch.createWithLayout(DLayout(DHorizontalLayout_L_W(150, 100), DVerticalLayout_T_H(350, 20)),ca.CASwitch.Type.SquareRect);
        customSwitch1.setTag(100);
        customSwitch1.setIsOn(true, false);
        customSwitch1.setTarget(this.switchStateChange);
        this.getView().addSubview(customSwitch1);

        var customSwitch2 = ca.CASwitch.createWithLayout(DLayout(DHorizontalLayout_R_W(150, 100), DVerticalLayout_T_H(350, 20)),ca.CASwitch.Type.RoundedRect);
        customSwitch2.setTag(101);
        customSwitch2.setIsOn(true, false);
        customSwitch2.setOnImage(ca.CAImage.create("image/Switch_on.png"));
        customSwitch2.setOffImage(ca.CAImage.create("image/Switch_off.png"));
        customSwitch2.setThumbTintImage(ca.CAImage.create("image/switch_p.png"));
        customSwitch2.setTarget(this.switchStateChange);
        this.getView().addSubview(customSwitch2);
    },
    switchStateChange: function (bIsOn) {
        if (!bIsOn)
        {
            log("switchStateChange false");
        }
        else
        {
            log("switchStateChange true");
        }
    }
});
