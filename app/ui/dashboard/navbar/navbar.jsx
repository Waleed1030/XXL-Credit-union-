import { MdNotificationsNone, MdSearch } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import styles from "./navbar.module.css";
import Image from "next/image";
import { auth } from "@/app/api/auth/[...nextauth]/auth";

const Navbar = async () => {
  const session = await auth();
  

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
          <div className={styles.img}>
            <Image
              src="/logo.png"
              width={200}
              height={40}
              className="object-cover"
            />
          </div>

        <div className={styles.icons}>
          <MdNotificationsNone className="text-[--accent]  text-[20px] md:text-[32px]" />

              <div className={styles.profile}>
                  <Image
                    src={session.user.img}
                    width={32}
                    height={32}
                    className="rounded-full h-[32px] w-[32px] md:h-[60px] md:w-[60px] "
                  />
                  <div className="capitalize font-semibold md:flex md:flex-col  hidden">
                    <p>
                      {session.user.firstname} {session.user.lastname}
                    </p>
                    <p>Online</p>
                  </div>
              </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
