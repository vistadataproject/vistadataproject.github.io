---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV FILE CANNED COMMENTS<br/>
# DENTV FILE CANNED COMMENTS

This rpc will file/update canned statements.The array must contain the following:      DENTV("PROV") - Provider IEN      DENTV("TYP") - 1: system, 2: user/provider      DENTV("CAT") - 1: radio, 2: summary, 3: treatment, 4: educ, 5: disp      DENTV(n) - n number of records for the WP field (the comment)      DENTV("IEN") - Only Send this only if a record is being updated, a                     null IEN means add.       There is no sort stored in this call. The record is automatically added to the bottom. You must use DENTV UPDATE COMMENT SORT to update sorting.

## Properties

Property | Value
--- | ---
Label | FILE
MUMPS Implementation | [DENTVCC](http://code.osehra.org/dox/Routine_DENTVCC_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DENTV | LIST | 255 | true | This is the comment information that must be entered to save/update the record.     DENTV(&quot;PROV&quot;) - Provider IEN     DENTV(&quot;TYP&quot;) - 1: system, 2: user     DENTV(&quot;CAT&quot;) - 1:radio,2:summary,3:treatment,4:educ,5:disp     DENTV(n) - n number of records for the WP field (the comment)     DENTV(&quot;IEN&quot;) - IEN is only used to updated an existing, null means                     add.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}