---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR DELETE REQUESTOR<br/>
# DSIR DELETE REQUESTOR

This RPC is used to delete orphan requestors or repoint and delete duplicate requestors. If the first parameter only is passed the routine will check to see that the requestor is in fact not used then it will delete the requestor from file 19620.12. If both the first and second parameters are passed the routine will check to see that both are valid requestors and then will repoint all entries that point to the requestor in parameter 1 to the requestor specified in parameter 2. Input Parameters:        1. Duplicate/Delete Requestor - IEN to file 19620.12 (Required)        2. Repoint to Requestor - IEN to file 19620.12 (Optional) Return Values:        -1^Missing Requestor IEN!        -2^Must Repoint Requestors in Use!        -3^Invalid Requestor #1        -4^Invalid Requestor #2        IEN passed in parameter 1 - Orphan Deleted        IEN passed in parameter 2 - Duplicate repointed and deleted

## Properties

Property | Value
--- | ---
Label | DUPRQTR
MUMPS Implementation | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DUPLICATE/ORPHAN | LITERAL | 99 | true | This is the pointer to file 19620.12 of the entry to replace/delete.
REPOINT TO | LITERAL | 99 | true | When this parameter is passed it will become the new requestor in place of the pointer passed in parameter 1.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}