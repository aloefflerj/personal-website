## What is HTTP?

**HTTP** (_Hypertext Transfer Protocol_) is a protocol for communication on the web.

![code-guy-explaining](https://github.com/aloefflerj/roadmaps/assets/51006938/d4300ff4-65c4-410c-b133-27578f79f942)

It is a web **application layer protocol** that uses the **TCP protocol**. It follows the **client-server model**, with **requests** and **responses**.

![code-guy-explaining2](https://github.com/aloefflerj/roadmaps/assets/51006938/b51da748-8b5a-4ff5-bfbb-bbef48ba1de3)

HTTP is **stateless**, meaning the server **does not maintain information about the client.** Consequently, each request must contain all the necessary information for the server to handle it independently.

![code-guy-explaining3](https://github.com/aloefflerj/roadmaps/assets/51006938/3e1d7f6f-886e-43ba-be67-0642a00700c9)

When data is sent encrypted over HTTP, the **HTTPS** protocol (_Hypertext Transfer Protocol Secure_) is used. HTTPS is secured by **SSL/TLS**.

![code-guy-explaining](https://github.com/aloefflerj/roadmaps/assets/51006938/d4300ff4-65c4-410c-b133-27578f79f942)

When a client makes an HTTP request to the server, a "**method**" (_or verb_) is attached to it. These methods provide a **standardized way to structure requests** based on their context. The four main methods are:

- **GET**: Retrieves data from the server.
- **POST**: Inserts new data to the server.
- **PUT**: Updates data on the server.
- **DELETE**: Deletes data from the server.

![code-guy-explaining2](https://github.com/aloefflerj/roadmaps/assets/51006938/b51da748-8b5a-4ff5-bfbb-bbef48ba1de3)

HTTP requests and responses structure consist of a **body** and a **header**. The body could be the HTML that the server responds with or a form that the client sends, for example.

![code-guy-explaining3](https://github.com/aloefflerj/roadmaps/assets/51006938/3e1d7f6f-886e-43ba-be67-0642a00700c9)

A JSON response example:

```json
 {
   "name": "John Doe",
   "user": "johndoe_warlock_master",
 }
```

![code-guy-explaining](https://github.com/aloefflerj/roadmaps/assets/51006938/d4300ff4-65c4-410c-b133-27578f79f942)

Headers are divided into general, response and request headers (_general headers are the ones that belongs to both request and response_). They contain **information and configuration details** about an HTTP communication.

![code-guy-explaining3](https://github.com/aloefflerj/roadmaps/assets/51006938/3e1d7f6f-886e-43ba-be67-0642a00700c9)

A request HTTP example with headers:

```
> GET / HTTP/2
> Host: google.com
> user-agent: insomnia/8.6.1
> accept: */*
```

![code-guy-explaining](https://github.com/aloefflerj/roadmaps/assets/51006938/d4300ff4-65c4-410c-b133-27578f79f942)

A response HTTP example with headers:

```
< HTTP/2 301 
< location: https://www.google.com/
< content-type: text/html; charset=UTF-8
< content-security-policy-report-only: object-src 'none'
< date: Fri, 26 Jul 2024 00:56:58 GMT
< expires: Sun, 25 Aug 2024 00:56:58 GMT
< cache-control: public, max-age=2592000
< server: gws
< content-length: 220
< x-xss-protection: 0
< x-frame-options: SAMEORIGIN
< alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

![code-guy-explaining](https://github.com/aloefflerj/roadmaps/assets/51006938/d4300ff4-65c4-410c-b133-27578f79f942)

While many headers may not be necessary for everyday use, some are particularly important. **The Status Code** header provides information about the status of the HTTP communication. The server can inform the client whether a request was successful by the status code it returns. These codes are divided into ranges, each representing different types of responses:

- **1xx**: _Informational_
- **2xx**: _Success_
- **3xx**: _Redirection_
- **4xx**: _Client Error_
- **5xx**: _Server Error_

![code-guy-explaining](https://github.com/aloefflerj/roadmaps/assets/51006938/d4300ff4-65c4-410c-b133-27578f79f942)

Some examples include:
- **200**: _OK_
- **404**: _Not Found_
- **500**: _Internal Server Error_

![code-guy-explaining2](https://github.com/aloefflerj/roadmaps/assets/51006938/b51da748-8b5a-4ff5-bfbb-bbef48ba1de3)
