# Alloy *Pop-in View* Widget

This is a widget for the [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework of [Appcelerator](http://www.appcelerator.com)'s [Titanium](http://www.appcelerator.com/platform) platform.

It allows you to toggle a view that shows and hides from the bottom of the screen.

![preview](https://raw.github.com/Martin1982/nl.martindekeijzer.popinview/master/docs/popinview.gif)

## Usage 

1. Install the widget as [documented in the Appcelerator docs](http://docs.appcelerator.com/platform/latest/#!/guide/Basic_Widget) where `com.foo.widget` is `nl.martindekeijzer.popinview`.

2. In any of your Window views you can place the widget at the bottom, just before the `</Window>`-close element:

    ```xml
    <Alloy>
        <Window id="someWindow">
            <Button id="exploreBtn">Explore</Button>
            <Widget id="popview" src="nl.martindekeijzer.popinview">
                <View layout="vertical" height="Ti.UI.SIZE">
                    <Label>Hello House</Label>
                    <Label>Hello Street</Label>
                    <Label>Hello City</Label>
                    <Label>Hello Country</Label>
                    <Label>Hello Continent</Label>
                    <Label>Hello World</Label>
                    <Label>Hello Galaxy</Label>
                    <Label>Hello Universe</Label>
                    <Button id="closePopBtn">Close me</Button>
                </View>
            </Widget>
        </Window>
    </Alloy>    
    ```
    The intial state of the view will be 'closed' so it will not be visible.
    
3. In your controller add the code to toggle showing the view:

    ```javascript
    function togglePopView(e) {
      $.popview.isOpen() ? $.popview.close() : $.popview.open();
    }
    
    $.exploreBtn.addEventListener('click', togglePopView);
    $.closePopBtn.addEventListener('click', togglePopView);
    ```
    
4. Build and run your app!

## Changelog

- 1.0.0: Initial release