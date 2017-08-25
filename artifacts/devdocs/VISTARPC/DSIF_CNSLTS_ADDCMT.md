---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF CNSLTS ADDCMT<br/>
# DSIF CNSLTS ADDCMT

This RPC allows for the adding of a Comment to a Consult. Cloned from ORQQCN ADDCMT

## Properties

Property | Value
--- | ---
Label | ADDCMT
MUMPS Implementation | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFIEN | LITERAL |  | true | This is the Consult IEN in which a comment needs to be added to.
DSIFCOM | LIST |  | true | This is the array of comments that need to be added to the Consult.
DSIFALRT | LITERAL | 1 |  | This is the indiciation that alerts should be sent to someone. 1 means yes.
DSIFALTO | LITERAL |  |  | Contains pointers to NEW PERSON FILE (200) for those to receive alert for this addition of a comment.
DSIFORDT | LITERAL |  |  | This is the date of the Comment is added to the Consult. If not passed in, defaults to NOW^XLFDT.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}