---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC SEND ALERT 

 property | value 
--- | --- 
 label | DSIC SEND ALERT
 tag | SEND
 routine | [DSICXQA](http://code.osehra.org/dox/Routine_DSICXQA_source.html)
 return value type | SINGLE VALUE
 description | RPC to send an alert

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LIST |  | true | DATA() is the input data to be passed to the Kernel's alert processor.Prior to 10/1/2003 the subscripts of DATA() were numeric.Since 10/1/2003 the subscripts should be strings.  No one should be using the numeric subscripts after 10/1/2003. For detailed description of the input array, see the routine DSICXQA. End description as of 10/1/2003                  alert should not be deleted for user        (4) = XQA(recipient)=\\ - at least one recipient required        (5) = XQA(recipient)=\\ - optional - additional recipient        (6,...) = XQA(additional recipients) | 