---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC FM DINUM<br/>
# DSIC FM DINUM

This will do a lookup on the inputted file for the requested value.  This is only for files whose .01 field is defined to be a DINUM pointer to afile.  If the lookup value in not in the inputted file, then this will add that pointer to that file.

## Properties

Property | Value
--- | ---
Label | DINUM
Routine | [DSICFM02](http://code.osehra.org/dox/Routine_DSICFM02_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the file number of the DSS file which has a .01 DINUM&#x27;d field
IEN | LITERAL | 20 | true | This is the ien of the pointed to file.  If the .01 field is not a pointer field then this parameter should not be passed when trying to add a new entry to the file.
VAL | LITERAL | 80 | true | This is the external value of the .01 field.   If the .01 field is a pointer field, then this would be some external lookup value for the pointed to file.   If the .01 field is not a pointer, then this must numeric.
IENS | LITERAL | 30 | true | This field is only valid if you are trying to add a DINUM&#x27;d value to a multiple in the FILE.  The syntax of iens is ,S1,S2,S3,   See M programmers for precise syntax to use if you need this.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}