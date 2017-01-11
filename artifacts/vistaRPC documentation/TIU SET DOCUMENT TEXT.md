---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU SET DOCUMENT TEXT 

 property | value 
--- | --- 
 label | TIU SET DOCUMENT TEXT
 tag | SETTEXT
 routine | [TIUSRVPT](http://code.osehra.org/dox/Routine_TIUSRVPT_source.html)
 return value type | SINGLE VALUE
 description | This RPC buffers the transmittal of text (i.e., the body of TIU Documents)from the Client to the Server. It allows documents of indefinite size tobe filed, without risk of an allocate error on the M Server.


### Method description

 property | value 
--- | --- 
 Method comment | Save Text - use Buffered I/O

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the IEN of the TIU Document in the TIU DOCUMENT file (#8925). | 
| TIUX | LIST |  | true | This is the array in which the body of the TIU Document is being passed,as:                  TIUX(\HDR\)=<# of Current Page>^<Total # of Pages>                TIUX(\TEXT\,1,0)=<Line 1 of document body>                TIUX(\TEXT\,2,0)=<Line 2 of document body>                TIUX(\TEXT\,3,0)=<Line 3 of document body>                        .                       .                        .                       .                        .                       .                TIUX(\TEXT\,i,0)=<Line i of document body> | 
| SUPPRESS | LITERAL |  | true | Optional parameter.  Default is 0 (no). Boolean flag that indicates whether to commit the data (as in the Save w/osignature action in CPRS), or to simply save it in the EDIT BUFFER for thedocument (as in the auto-save function). | 




Generated on January 11th 2017, 6:34:23 am