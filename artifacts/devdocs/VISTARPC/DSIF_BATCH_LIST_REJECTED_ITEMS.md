---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF BATCH LIST REJECTED ITEMS<br/>
# DSIF BATCH LIST REJECTED ITEMS

 ; Input: Batch # (IEN, if passed in as "nnn;") ; Output: ;    ; If B9 ;    ; ^TMP($J,"DSIFLRJ",1)=ien of 162.5 invoice file ; ; If B3 ; ; ^TMP($J,"DSIFLRJ",x)=ien of 162 payment file.  (may be multiple lines rejected) ; ; ^TMP($J,"DSIFLRJ",x)=ien of 162 payment file.  (may be multiple lines rejected) ;

## Properties

Property | Value
--- | ---
Label | LSTREJ
MUMPS Implementation | [DSIFLRJ](http://code.osehra.org/dox/Routine_DSIFLRJ_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FBBAT | LITERAL | 10 | true | Batch IEN or number IEN;NUMBER
FBTYPE | LITERAL | 2 | true | Batch type (required)
FROM | LITERAL | 7 | true | Date beginning from
TODATE | LITERAL | 7 | true | Until date
FBFROM |  |  |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}