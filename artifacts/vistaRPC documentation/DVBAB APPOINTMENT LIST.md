---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB APPOINTMENT LIST 

 property | value 
--- | --- 
 label | DVBAB APPOINTMENT LIST
 tag | DPA
 routine | [DVBAB1B](http://code.osehra.org/dox/Routine_DVBAB1B_source.html)
 return value type | GLOBAL ARRAY
 description | Returns a list of past, future or all appointments.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VAL1 | LITERAL | 10 | true | This is the DFN - the ien for the patient selected | 
| VAL2 | LITERAL | 1 | true | This is CHOICE - valid input is A (for All appointments), F (for FutureAppointments, or P (for Past Appointments). | 