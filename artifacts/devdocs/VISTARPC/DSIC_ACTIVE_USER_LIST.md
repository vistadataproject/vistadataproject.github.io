---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC ACTIVE USER LIST<br/>
# DSIC ACTIVE USER LIST

This will return a list of active users matching the lookup value.  You can pass in additional screening logic if so desired, such as security keys. It is the programmers responsibility to ensure that the total length of the date returned in each return value does not exceed 250 characters.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [DSICDUZ](http://code.osehra.org/dox/Routine_DSICDUZ_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VAL | LITERAL | 50 | true | This is the lookup value to find matches in file 200
SCR | LIST | 250 | true | This RPC will return a list of active users.  You may wish additional screening to occur.  For example, return all active users matching SMITH who also own a particular security key.  Acceptable format of SCR():  SCR(n) &#x3D; KEY^&lt;security key name&gt;  SCR(n) &#x3D; PARM^&lt;parameter name&gt;^&lt;parameter instance&gt;  SCR(n) &#x3D; M^&lt;return text&gt;^&lt;executable M code that sets $T&gt;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}