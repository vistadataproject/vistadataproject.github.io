---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR ADD EDIT ADDRESS<br/>
# DSIR ADD EDIT ADDRESS

This RPC is ussed to add or update an address in the ROI ADDRESS file (#19620.92).

## Properties

Property | Value
--- | ---
Label | UPDTADDR
Routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST |  | true | DATA - ARRAY - This will be a multiple value parameter.  The values in order will be as follows:   1. Address File Internal Number (Null if new OR Numeric)  2. Patient - Internal Number (&quot;441;DPT(,&quot;)  3. Street Address Line One - Text 35 character max  4. Street Address Line Two - Text 35 character max  5. Street Address Line Three - Text 35 character max  6. City - Text 40 character max  7. State - Internal Number - Numeric (ie. 36 for NY)  8. Zip Code - Numeric 5 or 9 numbers  9. Address Holder - Code ; Description     (Patient/Unregistered Patient/Requestor - P/N/R) 10. Holder - Internal Number ; File Reference&quot;      (Patient, Unregistered Patient, or Requestor IEN)     (&quot;441;DPT(,&quot;/&quot;6;DSIR(19620.96,&quot;/&quot;36;DSIR(19620.12,&quot;) 11. Inactive flag (1&#x3D;INACTIVE 12. Phone 13. Fax



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}