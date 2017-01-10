---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DG CHK MEANS TEST DIV DISPLAY 

 property | value 
--- | --- 
 label | DG CHK MEANS TEST DIV DISPLAY
 tag | GUIDMT
 routine | [DPTLK6](http://code.osehra.org/dox/Routine_DPTLK6_source.html)
 return value type | ARRAY
 description | CHECKS DIVISION FILE FOR DIV USER IS IN IF MEANS TEST REQUIRED IS SET TO YESRETURNS 1 IN 1ST STRING AND MEANS TEST TEXT  IN 2ND AND 3RD STRING (IF ANY) OTHERWISE RETURNS 0 IN 1ST STRING

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DUZ2 | LITERAL |  | true | Institution file pointer | 