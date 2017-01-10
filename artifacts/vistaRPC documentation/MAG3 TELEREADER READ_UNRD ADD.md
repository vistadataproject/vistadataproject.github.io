---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 TELEREADER READ_UNRD ADD 

 property | value 
--- | --- 
 label | MAG3 TELEREADER READ_UNRD ADD
 tag | FILE
 routine | [MAGNGMR](http://code.osehra.org/dox/Routine_MAGNGMR_source.html)
 return value type | SINGLE VALUE
 description | Add a consult and image pointers toUnread/Read List file (#2006.5849)and DICOM GMRC TEMP LIST file (#2006.5839)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGDA | LITERAL |  |  | An image IEN in IMAGE file (#2005) - ^MAG(2005,MAGDA) | 
| vs:Input_Parameter-8994_02 | MAGCNT | LITERAL |  | true | Count of new images captured | 
| vs:Input_Parameter-8994_02 | MAGRIEN | LITERAL |  | true | a request/consult IEN in REQUEST/CONSULTATION file (#123) | 