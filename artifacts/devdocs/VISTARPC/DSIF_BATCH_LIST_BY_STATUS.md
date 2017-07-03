---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF BATCH LIST BY STATUS
# DSIF BATCH LIST BY STATUS

Returns a list of batches sorted by entered status (O^C)  [open and closed]  Screens to users who opened and supervisors

Property | Value
--- | ---
Label | LISTSTAT
Routine | [DSIFBAT2](http://code.osehra.org/dox/Routine_DSIFBAT2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STATUS | LITERAL | 20 | true | Status to search: &#x27;C&#x27; FOR CLERK CLOSED;&#x27;S&#x27; FOR SUPERVISOR CLOSED;&#x27;O&#x27; FOR OPEN;&#x27;T&#x27; FOR TRANSMITTED;&#x27;V&#x27; FOR VOUCHERED;&#x27;P&#x27; FOR FORWARDED TO PRICER;&#x27;A&#x27; FORASSIGNED PRICE;&#x27;R&#x27; FOR REVIEWED AFTER PRICER;&#x27;F&#x27; FOR CENTRAL FEE ACCEPTED Delimited by &quot;^&quot;, multiple status can be entered: &quot;C^S^R&quot;
FEE PROGRAM | LITERAL | 3 | true | 
STARTDT | LITERAL | 7 | true | Start date to display batches, defaults to all batches if not entered
ENDDATE | LITERAL | 7 | true | Enter the end of the date rand\ge to display default to all dates. 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}