---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR UPDATE ADDRESS<br/>
# DSIR UPDATE ADDRESS

VEJD ROI UPDATE ADDRESS        Input Record Pieces '^' delimited:1.      Address File Internal Number - Null to add new record2.      Patient - Internal Number only (required)3.      Street Address Line One - Text 35 character max (optional)4.      Street Address Line Two - Text 35 character max (optional)5.      City - Text 40 character max (optional)6.      State - Internal Number (optional)7.      Zip Code - Numeric 5 or 9 numbers (optional)8.      Address Holder - 1 character P or R (optional)9.      Holder Internal Number - Numeric (optional)10.     Begin Date - Internal FileMan format (optional)11.     End Date - Same as 1012.     Street Address Line Three - Text 30 character max (optional)Optional pieces will not update if null, pass '@' to delete/clear data for specific field.  '@' in patient piece will delete entry in address table for internal number specified in piece 1. Return Value:1.      -1 ^ Error message2.      0 - Entry deleted3.      Internal Number to address table

## Properties

Property | Value
--- | ---
Label | UPDADDR
Routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ADDRESS RECORD | LITERAL | 245 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}