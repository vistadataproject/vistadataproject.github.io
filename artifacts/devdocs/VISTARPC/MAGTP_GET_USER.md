---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGTP GET USER<br/>
# MAGTP GET USER

Initialize session (Version Check, Display Check, collect User Info).

## Properties

Property | Value
--- | ---
Label | USERINF
Routine | [MAGTP008](http://code.osehra.org/dox/Routine_MAGTP008_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 100 | true | Information about the client and its workstation.^01: MAMMORES -- Screen resolution of main viewer display:format is X_&quot;x&quot;_Y_&quot;,&quot;_ColorType (e.g., 2048x2580,GRAY)where X,Y are resolutions &amp; ColorType&#x3D;{GRAY, COLOR}.^02: Client Vs ....... Client software version for checking.^03: Client O/S Vs ... Client OS version for logging.^04: ClientBuildDayTime ..... for logging.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}