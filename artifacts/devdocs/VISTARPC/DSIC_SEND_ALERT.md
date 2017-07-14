---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC SEND ALERT<br/>
# DSIC SEND ALERT

RPC to send an alert

## Properties

Property | Value
--- | ---
Label | SEND
Routine | [DSICXQA](http://code.osehra.org/dox/Routine_DSICXQA_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST |  | true | DATA() is the input data to be passed to the Kernel&#x27;s alert processor.Prior to 10/1/2003 the subscripts of DATA() were numeric.Since 10/1/2003 the subscripts should be strings.  No one should be using the numeric subscripts after 10/1/2003. For detailed description of the input array, see the routine DSICXQA. End description as of 10/1/2003                  alert should not be deleted for user        (4) &#x3D; XQA(recipient)&#x3D;&quot;&quot; - at least one recipient required        (5) &#x3D; XQA(recipient)&#x3D;&quot;&quot; - optional - additional recipient        (6,...) &#x3D; XQA(additional recipients)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}