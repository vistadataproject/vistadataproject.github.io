---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; RAMAG ORDER CANCEL<br/>
# RAMAG ORDER CANCEL

The RAMAG ORDER CANCEL remote procedure cancels/holds the Radiology orderand sends all required notifications. NOTE: If there are active cases in the RAD/NUC MED PATIENT file (#70)      associated with an order, this remote procedure neither cancels      nor holds the order and returns the error code -42.

## Properties

Property | Value
--- | ---
Label | ORDCANC
MUMPS Implementation | [RAMAGRP1](http://code.osehra.org/dox/Routine_RAMAGRP1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RAOIFN | LITERAL |  | true | IEN of the order in the RAD/NUC MED ORDERS file (#75.1).
RAREASON | LITERAL |  | true | Cancel/hold reason: either IEN of a record of the RAD/NUC MED REASON file(#75.2) or a valid synonym (see SYNONYM field (3) of that file). The referenced record must have the appropriate type (see TYPE OF REASONfield (2) of the file #75.2):  * If the reason record has the CANCEL REQUEST (1) type,   then the &#x27;HOLDESC&#x27; (see the RAMSC parameter) is ignored   and the order is canceled.  * If the reason record is of the HOLD REQUEST (3) type,   then the order is put on hold. If the &#x27;HOLDESC&#x27; parameter   is defined, the text is stored into the HOLD DESCRIPTION   field.  * If the record is of the GENERAL REQUEST  type (9), then   the new order status is determined by the &#x27;HOLDESC&#x27;   parameter. If it is defined, then the order is put on   hold; otherwise, the order is canceled.
RAMSC | LIST |  |  | Items of this list define miscellaneous/optional parameters. Each recordhas 3 or more pieces separated by &#x27;^&#x27;:   ^01: Parameter name  ^02: Index (for multiples and word-processing values)  ^03: Value1  ^04: Value2  ... The following parameters are supported by this remote procedure:    HOLDESC^{Seq#}^{Line of hold description}    Text for the HOLD DESCRIPTION field (25)    of the file #75.1. Records can be added to the list in any order. See the comments precedingthe $$ORDCANC^RAMAG04 for more details. Examples:   with RPCBroker.Param[2] do    begin      PType :&#x3D; list;      Mult[1] :&#x3D; &#x27;HOLDESC^1^Hold description line #1&#x27;;      Mult[2] :&#x3D; &#x27;HOLDESC^2^Hold description line #2&#x27;;    end;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}