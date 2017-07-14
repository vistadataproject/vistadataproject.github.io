---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR GUI PARAMETER SET<br/>
# ROR GUI PARAMETER SET

The ROR GUI PARAMETER SET remote procedure stores the parameter value andassociates it with the provided entity (see the DBIA #2263 for more details).

## Properties

Property | Value
--- | ---
Label | SETPARM
Routine | [RORRP038](http://code.osehra.org/dox/Routine_RORRP038_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INSTANCE | LITERAL | 91 | true | The INSTANCE parameter defines the instance name of the GUI parameter. It can also contain the parameter name as the second &quot;^&quot;-piece (by default, the &quot;ROR GUI PARAMETER&quot; is used).
ENTITY | LITERAL | 30 |  | The ENTITY parameter defines the context that the parameter value isassociated with. By default ($G(ENTITY)&#x3D;&quot;&quot;), the &quot;USR&quot; (user settings)value is used (see the DBIA #2263 for more details). The other value thatis used most often is the &quot;PKG&quot; (package settings).
VALUE | LIST |  |  | The VALUE parameter defines the value of the GUI parameter. It should beeither a literal (string value) or a list (text value). You can use the &quot;@&quot; value to delete the parameter.  NOTE: The list (the Mult property) should not contain       the 0 subscript (it will not be stored). Example #1 (string value):   RPCBroker.Param[0].Value :&#x3D; &#x27;MAIN FORM POS&#x27;;  RPCBroker.Param[0].PType :&#x3D; literal;  RPCBroker.Param[1].Value :&#x3D; &#x27;&#x27;;  RPCBroker.Param[1].PType :&#x3D; literal;  RPCBroker.Param[2].Value :&#x3D; &#x27;5,5,400,250&#x27;;  RPCBroker.Param[2].PType :&#x3D; literal; Example #2 (text value):   RPCBroker.Param[0].Value :&#x3D; &#x27;COM PORT SETTINGS&#x27;;  RPCBroker.Param[0].PType :&#x3D; literal;  RPCBroker.Param[1].Value :&#x3D; &#x27;PKG&#x27;;  RPCBroker.Param[1].PType :&#x3D; literal;  RPCBroker.Param[2].Mult[1] :&#x3D; &#x27;Port&#x3D;COM1&#x27;;  RPCBroker.Param[2].Mult[2] :&#x3D; &#x27;Baud&#x3D;19200&#x27;;  RPCBroker.Param[2].PType :&#x3D; list;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}