---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR ADD EDIT REQUESTOR<br/>
# DSIR ADD EDIT REQUESTOR

This RPC will add or update an entry in the REQUESTOR FILE in ROI (#19620.12)

## Properties

Property | Value
--- | ---
Label | UPDRQSTR
MUMPS Implementation | [DSIROI3](http://code.osehra.org/dox/Routine_DSIROI3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA ARRAY | LIST |  | true | DATA - ARRAY - This will be a multiple value parameter. The values in order will be as follows:  1. Requestor File Internal Number (Null if new OR Numeric) 2. Lookup Name - Text - REQUIRED 3. Requestor type - Pointer to DSIR BILLING TYPE file (19620.8) 4. First Name 5. Middle Name 6. Last Name 7. Corporate Name 8. Salutation 9. E-mail 10. Primary address Pointer (IEN in 19620.92) 11. PATIENT POINTER (IE. &quot;441;DPT(&quot;, &quot;67:DSIR(19620.96,&quot;)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}