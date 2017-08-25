---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORK DEBUG ENABLE/DISABLE<br/>
# ORK DEBUG ENABLE/DISABLE

Parameter determines if order checking will log debug messages into^XTMP(&quot;ORKLOG&quot;.  &#x27;Enabled&#x27; indicates logging will occur.  &#x27;Disabled&#x27; willprevent logging of messages and delete log file (^XTMP(&quot;ORKLOG&quot;)). The data for zero node entries is the information passed to order checkingfrom OE/RR. The zero node is in the format:^XTMP(&quot;ORKLOG&quot;,&lt;order check date/time&gt;,&lt;pt id&gt;,&lt;orderable item&gt;,&lt;dlog mode&gt;,&lt;user id&gt;,0)&#x3D;&lt;orderable item&gt;/&lt;filler&gt;/&lt;natl id^natl text^natl sys^local id^local text^local sys&gt;/&lt;order effective date/time&gt;/&lt;order number&gt;/&lt;filler data&gt; The data for non-zero node entries is the information passed from orderchecking back to OE/RR.  It is the order check messages plus other info toenhance OE/RR processing.  It is in the format:^XTMP(&quot;ORKLOG&quot;,&lt;order check date/time&gt;,&lt;pt id&gt;,&lt;orderable item&gt;,&lt;dlog mode&gt;,&lt;user id&gt;,&lt;non-zero&gt;)&#x3D;&lt;order number&gt;^&lt;order check id - 864.5 ien&gt;^&lt;clin danger level&gt;^&lt;message&gt; 

## Properties

Property | Value
--- | ---
Summary | Enable or disable debug log.
Value Type | set of codes
Value Domain | E:Enable;D:Disable
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM
3 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}