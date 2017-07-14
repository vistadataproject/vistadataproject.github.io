---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF PAY SCHEDULE<br/>
# DSIF PAY SCHEDULE

Get pay schedule amounts by CPT, Modifiers and Zip code

## Properties

Property | Value
--- | ---
Label | PAYSCH
Routine | [DSIFPAY1](http://code.osehra.org/dox/Routine_DSIFPAY1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CPT | LITERAL | 30 | true | 
MODIFIERS | LITERAL | 35 | true | CPT modifiers (external value), comma deliminted
DATE OF SERVICE | LITERAL | 7 | true | Entered in standard FM format:  CYYMMDD (time is not allowed here) C - Centuries since 1700 (2000&#x27;s &#x3D; 3) YY - two digit year MM - 2 digit month DD - Day Oct 15, 2001 &#x3D; 3011015  
ZIP | LITERAL | 9 | true | 
VENDOR IEN | LITERAL | 35 | true | 
TYPE OF SERVICE | LITERAL | 12 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}