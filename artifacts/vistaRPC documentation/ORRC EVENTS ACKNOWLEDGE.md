---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC EVENTS ACKNOWLEDGE 

 property | value 
--- | --- 
 label | ORRC EVENTS ACKNOWLEDGE
 tag | CLEAR
 routine | [ORRCEVT](http://code.osehra.org/dox/Routine_ORRCEVT_source.html)
 return value type | ARRAY
 description | This call will clear the event alerts for this user, and return a trueor false value for each ID if successful.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200. | 
| ALERTS | LIST |  | true | This is the list of alert IDs to be cleared, in the form \VST:\_ID whereID is the alert identifier as defined by Kernel (\OR,<patient>,<Notification ien>;<creator>;<date created>\). | 




Generated on January 11th 2017, 6:34:23 am