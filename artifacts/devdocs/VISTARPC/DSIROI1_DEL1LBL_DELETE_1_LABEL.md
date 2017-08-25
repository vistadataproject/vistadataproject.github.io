---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIROI1 DEL1LBL DELETE 1 LABEL<br/>
# DSIROI1 DEL1LBL DELETE 1 LABEL

This routine deletes one label from the label file (19620.14.)

## Properties

Property | Value
--- | ---
Label | DEL1LBL
MUMPS Implementation | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CIEN | LITERAL | 20 | true | Clerk ID is the IEN from file 200 for the requesting clerk.
RIEN | LITERAL | 20 | true | RIEN is the Requestor IEN.  This points to file 19620.12
AIEN | LITERAL | 20 | true | AIEN is the IEN of the address record.  This points at file 19620.92.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}