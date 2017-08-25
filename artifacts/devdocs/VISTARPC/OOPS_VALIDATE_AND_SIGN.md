---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS VALIDATE AND SIGN<br/>
# OOPS VALIDATE AND SIGN

This broker call handles the validation of data prior to a user entering their electronic signature code.  It also validates the electronic signature code and then assures that the users electronic signature code, the date/time of signature, and the users DUZ is filed in the Vista database.

## Properties

Property | Value
--- | ---
Label | SETSIGN
MUMPS Implementation | [OOPSGUI1](http://code.osehra.org/dox/Routine_OOPSGUI1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | This parameter contains the IEN of the record being filed, the form (CA1 orCA2), and the Field number that will trigger the data validation to be performed on the fields in the form.The format for this parameter is: IEN^FORM^FIELD^WCFLAG.
SIGN | LITERAL | 256 | true | This parameter passes in the text to be encrypted, validated, and used as theelectronic signature.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}