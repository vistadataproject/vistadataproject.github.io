---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF PAY SCHEDULE
# DSIF PAY SCHEDULE

Get pay schedule amounts by CPT, Modifiers and Zip code

Property | Value
--- | ---
Label | PAYSCH
Routine | [DSIFPAY1](http://code.osehra.org/dox/Routine_DSIFPAY1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CPT | LITERAL | 30 | true | 
MODIFIERS | LITERAL | 35 | true | CPT modifiers (external value), comma deliminted
DATE OF SERVICE | LITERAL | 7 | true | Entered in standard FM format:  CYYMMDD (time is not allowed here) C - Centuries since 1700 (2000&#x27;s &#x3D; 3) YY - two digit year MM - 2 digit month DD - Day Oct 15, 2001 &#x3D; 3011015  
ZIP | LITERAL | 9 | true | 
VENDOR IEN | LITERAL | 35 | true | 
TYPE OF SERVICE | LITERAL | 12 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}