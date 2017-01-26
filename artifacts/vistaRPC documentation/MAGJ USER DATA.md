---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGJ USER DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGJ USER DATA{:/}
 tag | {::nomarkdown}RPCIN{:/}
 routine | [MAGJPRF1](http://code.osehra.org/dox/Routine_MAGJPRF1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}  +---------------------------------------------------------------+   Property of the US Government.                                   No permission to copy or redistribute this software is given.    Use of unreleased versions of this software requires the user    to execute a written test agreement with the VistA Imaging       Development Office of the Department of Veterans Affairs,        telephone (301) 734-0100.                                                                                                         The Food and Drug Administration classifies this software as     a medical device.  As such, it may not be changed in any way.    Modifications to this software may result in an adulterated      medical device under 21CFR820, the use of which is considered    to be a violation of US Federal Statutes.                       +---------------------------------------------------------------+ Store/retrieve Vistarad USer preferences, including hanging protocols, etc.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}TXID ^ SYSUPDAT ^ TXDUZ ^ TXDIVTXID: Transaction ID--identifies the type of transaction being requested;TXDUZ: Optional; DUZ value for retrieving another users stored data.  E.g., allow User X to see User Y's Hanging ProtocolsTXDIV: Optional; DIVision value for viewing data stored from other divisions.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}WORD PROCESSING{:/} | {::nomarkdown}240{:/} |  | {::nomarkdown}Optional Block of text sent from the client side; has structure as follows *LABEL Label Value 0:N lines of text associated with Label Value *ENDNote: multiple sequences of the above may be included.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}