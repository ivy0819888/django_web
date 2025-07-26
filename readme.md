## **基于python的学生在线家庭作业系统的设计与实现**

### 项目介绍

本系统能够满足学生完成作业学习知识的要求，同时也能方便老师及时检查学生进度以及进行新的作业布置等功能。自适应性使学生不会在学习的旅途中感觉盲目，迷失方向。大大满足了学生学习的个性化，教师工作时效性的双方面的要求。

### 项目功能

本项目分为前台和后台

前台功能

学生端

- 作业布置
- 作业提交
- 作业批改
- 个人中心

教师端

- 课程信息
- 作业布置
- 作业提交
- 作业批改
- 个人信息

后台功能

- 学院管理
- 专业管理
- 班级管理
- 学生管理
- 教师管理
- 课程信息管理
- 作业布置管理
- 作业提交管理
- 作业批改管理
- 个人信息管理

**管理员功能界面图**

https://github.com/ivy0819888/django_web/blob/main/%E5%AD%A6%E7%94%9F.png

**学生管理界面图**

https://github.com/ivy0819888/django_web/blob/main/%E5%AD%A6%E7%94%9F.png

**教师管理界面图**

https://github.com/ivy0819888/django_web/blob/main/%E6%95%99%E5%B8%88.png

### 适合人群

python初级学员、大学生、系统设计人员、面试作品

### 源码

<https://github.com/geeeeeeeek/django_web/>

### 安装依赖库

pip install -r requirements.txt -i http://mirrors.aliyun.com/pypi/simple/   --trusted-host mirrors.aliyun.com&&python ./init.py initdb&&python ./manage.py makemigrations&&python ./manage.py migrate --fake-initial&&python ./init.py initsql&&python ./manage.py shell -c "from django.contrib.auth.models import User;User.objects.filter(username='abo').exists() or User.objects.create_superuser('abo','abo@example.com', 'abo')" 

### 运行项目

运行 python  manage.py runserver   --insecure 0.0.0.0:8080 即可

路径地址：localhost:8080/项目名称/admin/dist/index.html
