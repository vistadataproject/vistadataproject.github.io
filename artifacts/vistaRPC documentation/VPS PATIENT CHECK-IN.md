---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS PATIENT CHECK-IN 

 property | value 
--- | --- 
 label | VPS PATIENT CHECK-IN
 tag | CHK
 routine | [VPSRPC4](http://code.osehra.org/dox/Routine_VPSRPC4_source.html)
 return value type | ARRAY
 description | Called by Vetlink Kiosk system.  The RPC will accept a single value asinput representing the string of pending appointments that the patient isto be checked-in.; and the output produced will be an array that returnsthe results of each attempted check-in.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | VPSAPPTS | LITERAL | 225 | true | Input: string that represents the appt(s) to be checked in.  Since more than one appt can be checked-in, each appt consists of the DFN, CLINIC ien, and appt date/timestamp.  Each appt is delimited by \;\ and the 3 pieces of data are separated by \-\.   All 3 data elements in the appt representation are required input.Syntax:           input=DFN_\-\_clinic IEN_\-\_date/timestamp of scheduled appt_\;\ example of data string (represents 2 appts):          \308165-1218-3120420.1215;308165-4569-3120420.1030\ | 