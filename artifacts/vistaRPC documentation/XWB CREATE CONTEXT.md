---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XWB CREATE CONTEXT 

 property | value 
--- | --- 
 label | XWB CREATE CONTEXT
 tag | CRCONTXT
 routine | [XWBSEC](http://code.osehra.org/dox/Routine_XWBSEC_source.html)
 return value type | SINGLE VALUE
 description | Establishes context on the server, which will be checked by the Broker beforeexecuting any other remote procedure.  Since context is nothing more than aclient/server \B\-type option in the OPTION file (#19), standard MenuMansecurity is applied in establishing a context.  Therefore, a context optioncan be granted to user(s) exactly the same way as regular options are doneusing MenuMan.A context can not be established for the following reasons:        The user has no access to that option        The option is temporarily out of orderAn application can switch from one context to another as often as it needs to.Each time a context is created the previous context is overwritten.For more information on creating a context and the overall Broker securitysee Broker on-line help documentation.


### Method description

 property | value 
--- | --- 
 Method comment | creates context for the passed in option




 Generated on January 11th 2017, 7:15:03 am